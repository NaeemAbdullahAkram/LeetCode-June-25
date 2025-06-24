
var RecentCounter = function() {
    this.queue=[]
    this.size=0
};

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    this.size++
    while (this.queue[0]<(t-3000)){
        this.queue.shift()
        this.size--
    }
    return this.size
};