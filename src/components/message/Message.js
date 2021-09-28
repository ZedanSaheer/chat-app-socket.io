import "./Message.css"

const Message = ({message:{user,text},name}) => {

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user===trimmedName){
        isSentByCurrentUser = true;
    }

    return (
      isSentByCurrentUser ? 
      (<div className="messageContainer jc-end">
            <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox bg-blue">
                <p className="messageText text-light">{text}</p>
            </div>
        </div>)
        :  (<div className="messageContainer jc-start">
       
        <div className="messageBox bg-light text-dark">
            <p className="messageText">{text}</p>
            <p className="sentText pl-10">{user}</p>
        </div>
    </div>)
    )
}

export default Message
