let map = new Map();
map.set("1", "string"); 
map.set("2", "number"); 
map.set("3", "boolean");
for (let key of map.keys()) { 
  console.log(`Ключ — ${key}, значение — ${map.get(key)}`);
}


