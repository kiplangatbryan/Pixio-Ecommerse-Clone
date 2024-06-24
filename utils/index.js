


export const uniqUuid = () => {
    const s4 = () => {
        return ( ( ( Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};


export const checkImageUrl = ( url ) => {
    if ( !url ) return false
    else {
        const pattern = new RegExp( '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i' );
        return pattern.test(url)
    }
}

