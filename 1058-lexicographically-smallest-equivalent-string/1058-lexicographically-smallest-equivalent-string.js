class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      // Always attach the larger root to the smaller root
      if (rootX < rootY) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootX] = rootY;
      }
    }
  }

  getReformedString(char) {
    return String.fromCharCode(this.find(char.charCodeAt(0) - 97) + 97)
  }
}

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const uf = new UnionFind(26)

  for (let i = 0; i < s1.length; i++) {
    const char1 = s1.charCodeAt(i) - 97; // 'a' -> 0, ..., 'z' -> 25
    const char2 = s2.charCodeAt(i) - 97;
    uf.union(char1, char2)
  }

  return [...baseStr].map((char) => uf.getReformedString(char)).join('')
};