//当前留言
export const getMsgObj = (items,{name,text}) => {
    let localTime = new Date();
    let now = localTime.getFullYear() + '/' + (localTime.getMonth() + 1) + '/' + localTime.getDate() +
        '\t' + localTime.getHours() + ':' + localTime.getMinutes();
    return {
        id: items.messages.length,
        name: name,
        text: text,
        time: now
    }
}

