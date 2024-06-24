
  // const buildSections = ( segments = [] ) => {
    
  //   // build segments with each segment hosting a chapter
    
  //   if ( segments.length == 0 ) return []
    
  //   const CHAPTERS_LIMIT = segments[ segments.length - 1 ]['field'][ 2 ]
    
    
  //   const sections = []
  //   // schema { title: '', data: [] }
    
  //   for ( let i = 0; i < CHAPTERS_LIMIT; i++ ) {
  //       let no = i + 1
        
  //       // extract all the verses
  //       let verses = []
  //       for ( let blob of segments ) {
  //         if ( blob[ 'field' ][ 2 ] == no ) {
  //           verses.push({text: blob[ 'field' ][4], verse: blob[ 'field' ][3]})
  //         }
  //       }
       
  //       // split into chunks of 4
  //       let chunks = [], chunkSize = 4
        
  //       for ( let i = 0; i < verses.length; i  += chunkSize ) {
  //         const chunk = verses.slice( i, i + chunkSize );
  //         chunks.push(chunk)
  //       }
      
      
  //     const createPassage = ( verseArray = [] ) => {
  //       return ( <View>
  //         {verseArray.map( (v, index) => <View  key={uniqUuid()}><Text>{v.verse}</Text><Text>{v.text }</Text></View>) }
  //       </View>)
  //     }
        
  //     // // add segments data
  //     let data = []
  //     for ( let chunk of chunks ) {
  //       data.push(createPassage(chunk))
  //     }
      
  //     let segment = {}
  //      // add segment title
  //       segment[ 'title' ] = ( <View style={styles.chapterTitleContainer}>
  //         <Text style={styles.chapterTitle}>{bookTitle }</Text>
  //         <Text style={styles.chapterNum}>{no }</Text>
  //       </View> )
      
  //     // add chapter content
  //     segment['data'] = data
  //     sections.push(segment)
  //   }

  //   return sections
  // }
