goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__44834 = (new Array((cap + (1))));
(G__44834[(0)] = (0));

return G__44834;
});
missionary.impl.Heap.size = (function missionary$impl$Heap$size(heap){
return (heap[(0)]);
});
missionary.impl.Heap.enqueue = (function missionary$impl$Heap$enqueue(heap,i){
var j = ((heap[(0)]) + (1));
(heap[(0)] = j);

(heap[j] = i);

var j__$1 = j;
while(true){
if(((1) === j__$1)){
return null;
} else {
var p = (j__$1 >> (1));
var x = (heap[j__$1]);
var y = (heap[p]);
if((y < x)){
return null;
} else {
(heap[p] = x);

(heap[j__$1] = y);

var G__44839 = p;
j__$1 = G__44839;
continue;
}
}
break;
}
});
missionary.impl.Heap.dequeue = (function missionary$impl$Heap$dequeue(heap){
var s = (heap[(0)]);
var i = (heap[(1)]);
(heap[(0)] = (s - (1)));

(heap[(1)] = (heap[s]));

var j_44841 = (1);
while(true){
var l_44842 = (j_44841 << (1));
if((l_44842 < s)){
var x_44843 = (heap[j_44841]);
var y_44844 = (heap[l_44842]);
var r_44845 = (l_44842 + (1));
if((r_44845 < s)){
var z_44846 = (heap[r_44845]);
if((y_44844 < z_44846)){
if((z_44846 < x_44843)){
(heap[r_44845] = x_44843);

(heap[j_44841] = z_44846);

var G__44847 = r_44845;
j_44841 = G__44847;
continue;
} else {
}
} else {
if((y_44844 < x_44843)){
(heap[l_44842] = x_44843);

(heap[j_44841] = y_44844);

var G__44848 = l_44842;
j_44841 = G__44848;
continue;
} else {
}
}
} else {
if((y_44844 < x_44843)){
(heap[l_44842] = x_44843);

(heap[j_44841] = y_44844);

var G__44849 = l_44842;
j_44841 = G__44849;
continue;
} else {
}
}
} else {
}
break;
}

return i;
});

//# sourceMappingURL=missionary.impl.Heap.js.map
