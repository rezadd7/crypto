const convertData = (data,type)=>{
    const convertedData = data[type].map(i=> {
        return {
            data: i[0],
            [type]: i[1]
        }
    })
    return convertedData    
}

export {convertData}