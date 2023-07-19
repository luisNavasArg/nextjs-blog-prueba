export const getData = async()=>{
    try {
      const response = await fetch("http://localhost:3000/api/users")
      const result = await response.json();
      return result
    } catch (error) {
      return {error: error};
    }
    
    
}
export const postData = async(data)=>{
    let url = "http://localhost:3000/api/users"
    try {
        const response = await fetch(url, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        return {success: result};
      } catch (error) {
        return {error: error};
      }
}
export const deleteUser=async(id)=>{
  let url = "http://localhost:3000/api/users/"+id;
  console.log(url);
  try {
      const response = await fetch(url, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });
      const result = await response.json();
      return {success: result};
    } catch (error) {
      return {error: error};
    }

}