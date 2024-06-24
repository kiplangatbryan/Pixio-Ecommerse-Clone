import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';



export const initializeDatabase = async () => {
    const dbName = 'kalis.db';
    const db = SQLite.openDatabase( dbName );

    const pathToSqlFile = '../../../assets/db/book_info.sql'

    // Path to the SQL file in assets and destination in the app's data directory
    const sqlFile = FileSystem.documentDirectory + 'book_info.sql';
    const assetUri = ExpoAsset.fromModule( require( pathToSqlFile ) ).uri;

    // Copy SQL file from assets to the app's data directory
    await FileSystem.downloadAsync( assetUri, sqlFile )
        .then( async ( { uri } ) => {
            const response = await FileSystem.readAsStringAsync( uri );
            const sqlStatements = response.split( ';' ); // Assuming each statement ends with a semicolon

            // Execute SQL statements
            db.transaction( tx => {
                sqlStatements.forEach( statement => {
                    tx.executeSql( statement, [], ( _, { rows } ) => {
                        console.log( 'Rows affected:', rows.length );
                    } );
                } );
            } );
        } )
        .catch( error => {
            console.error( 'Error copying file:', error );
        } );
};