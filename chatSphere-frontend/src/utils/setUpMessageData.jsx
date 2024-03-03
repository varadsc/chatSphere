export const setMessageFormat = (messageObject, newMsgdata) => {
    
    const id = newMsgdata.id;
    const dataTopush = {
        message: newMsgdata.message,
        time: newMsgdata.time,
        issent: newMsgdata.issent
     }
    
    if (!messageObject.hasOwnProperty(id)) {
        // If id is not present in message object, add it and initialize it with an array containing the data object
        messageObject[id] = [dataTopush];
    } else {
        // If id is already present, push the data object into the existing array
        messageObject[id].push(dataTopush);
    }

    return messageObject;
}