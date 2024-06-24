import sqlite  from 'react-native-sqlite-storage'
import  RNfs from  'react-native-fs'


export const readDb = (dbname='') => {

    RNfs.readFileAssets()
    const store = sqlite.openDatabase();

    return store.transaction()
}