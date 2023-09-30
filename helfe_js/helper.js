export const  generateUniqueID=()=> {
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16); // Generate a hexadecimal timestamp
    const randomChars = Math.random().toString(36).substring(2, 10); // Generate random characters
  
    // Create a unique ID by concatenating the timestamp and random characters
    const uniqueID = `${timestamp}${randomChars}`;
  
    return uniqueID;
  }

  export const createslug=(name)=>{
    // Convert the product name to lowercase and replace spaces with hyphens
    const slug = name.toLowerCase().replace(/\s+/g, '-');
  
    // Remove any characters that are not alphanumeric or hyphens
    const cleanedSlug = slug.replace(/[^a-z0-9-]/g, '');
  
    return cleanedSlug;
  }