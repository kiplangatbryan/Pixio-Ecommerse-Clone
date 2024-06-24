import filesystem from 'expo-file-system';
import sqlite from 'expo-sqlite';
import { useAssets } from 'expo-asset';


export const initialize = async () =>
{
    const [assets, error] = useAssets([require('./assets/db/book_info.sql')])

    console.log( assets )

    try
    {
        const connection = await sqlite.openDatabase( 'main.db' );
        console.log( 'connection' );

        connection.transaction( tx =>
        {
            tx.executeSql( sqlStatement, [], ( transaction, resultSet ) =>
            {
                console.log( resultSet );
            },
                ( error ) =>
                {
                    console.log( error );
                }
            );
        } );
    }
    catch ( err )
    {
        console.log( 'an error occured' );
    }
};