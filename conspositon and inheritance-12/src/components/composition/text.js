export default function Text({ addEmoji, addBracket }) {
    let text = 'i am javascript programming language';
    if (addEmoji) {
        text = addEmoji(text, '💜');
    } else if (addBracket) {
        text = addBracket(text);
    }
    return <div>{text}</div>;
}

// return <div>{addEmoji ? addEmoji(text, '💜') : text}</div>;
