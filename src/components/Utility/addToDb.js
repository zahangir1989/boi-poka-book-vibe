
const getStoreReadList = () =>{
 const storedListStr = localStorage.getItem('read-list');
 if(storedListStr){
 const storedList = JSON.parse(storedListStr)
 return storedList;
 }
 else{
    return [];
 }
}

const addToStoredReadList = (id) =>{
    const storedList =  getStoreReadList();
    if(storedList.includes(id)){
        console.log(id, 'already exists ins the read list')
    }
    else{
      storedList.push(id); 
      const storedListStr = JSON.stringify(storedList);
      localStorage.setItem('read-list', storedListStr);
    }
}
export {addToStoredReadList, getStoreReadList}