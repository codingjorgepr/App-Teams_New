// renders image if the message is the image

const MyMessage = ({message}) => {
    
    if(message?.attachments?.length > 0) {
        return (
            <img 
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ float: 'right' }}
            />
        )
    }
    
    
    
    // if it is not the image only render text
    return (
        <div className="message" style={{ 
            float: 'right', 
            marginRight: '18px',
            color: 'white',
            backgroundColor: "#3B2A50"}}>
           
           {message.text}
        
        </div>
    );
    } 
    
    export default MyMessage;