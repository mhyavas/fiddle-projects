(ns dev
  (:require
    electric-starter-app.main
    [hyperfiddle.electric :as e]
    #?(:clj [electric-starter-app.server-jetty :as jetty])
    #?(:clj [shadow.cljs.devtools.api :as shadow])
    #?(:clj [shadow.cljs.devtools.server :as shadow-server])
    #?(:clj [clojure.tools.logging :as log])))

(comment (-main)) ; repl entrypoint

#?(:clj ;; Server Entrypoint
   (do
     (def config
       {:host "0.0.0.0"
        :port 8080
        :resources-path "public/electric_starter_app"
        :manifest-path ; contains Electric compiled program's version so client and server stays in sync
        "public//electric_starter_app/js/manifest.edn"})
     (def datomic-client)
     (def datomic-conn)

     (defn -main [& args]
       (log/info "Starting Electric compiler and server...")

       (shadow-server/start!)
       (shadow/watch :dev)
       (comment (shadow-server/stop!))
       (alter-var-root #'datomic-client (constantly (d/client {:server-type
                                                               :dev-local
                                                               :storage-dir "C:\\Users\\amibroker\\Desktop\\fiddle-template\\electric-starter-app\\test_db"
                                                               :system "ci"})))
       (alter-var-root #'datomic-conn (constantly (d/connect datomic-client {:db-name "form"})))
       (def db (datomic.client.api.async/db datomic-conn))

       (def server (jetty/start-server!
                     (fn [ring-request]
                       (e/boot-server {} electric-starter-app.main/Main ring-request))
                     config))

       (comment (.stop server)))))


#?(:cljs ;; Client Entrypoint
   (do
     (def electric-entrypoint (e/boot-client {} electric-starter-app.main/Main nil))

     (defonce reactor nil)

     (defn ^:dev/after-load ^:export start! []
       (set! reactor (electric-entrypoint
                       #(js/console.log "Reactor success:" %)
                       #(js/console.error "Reactor failure:" %))))

     (defn ^:dev/before-load stop! []
       (when reactor (reactor)) ; stop the reactor
       (set! reactor nil))))
