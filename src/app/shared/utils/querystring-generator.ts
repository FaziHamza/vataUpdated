export function createQueryString(data, arrayKey) {
  console.log(data);
  if(!data)
  return;
  return Object.keys(data)
    .map((key) => {
    let val = data[key];
    if (key === 'category' && data[key]) {
      return val = `${key}=${data[key]['id']}`;
    }
    if (key === 'price_range') {
        return val = `${key}=${data[key]['min']},${data[key]['max']}`
    }
      if (!Array.isArray(val) && typeof val === "object") val = createQueryString(val, key);
      if (Array.isArray(val)) {
        let q = '';
        let firstCond = false;
        val.forEach((element, i) => {
            if (typeof element === "object" && element['isSelected']) { 
                if(key === 'condition'){
                  if(!firstCond){
                    q+= key + '=';
                    firstCond = true;
                  } else
                    q += ',';
                  q += `${element[arrayKey]}`;
                } else{
                  q += `${key}=${element[arrayKey]}${i === val.length - 1 ? '' : '&'}`
                }
                
            }      
        });
        return q;
      } else {
        if (val) {
          return `${key}=${encodeURIComponent(`${val}`.replace(/\s/g, "_"))}`;
        }
      }
    }).filter(x => x && x.length > 0)
    .join("&");
}
