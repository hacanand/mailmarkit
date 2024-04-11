import mongoose from 'mongoose';
import { driver, createAstraUri } from 'stargate-mongoose'

export const connectDb = async () => {
    try {
        const uri = createAstraUri(
            process.env.ASTRA_DB_API_ENDPOINT!,
            process.env.ASTRA_DB_APPLICATION_TOKEN!,

        );
        //Check if the driver is already connected
        if (mongoose.connection.readyState !== 0) {
            //disconnect the driver
            await mongoose.disconnect();
        }
        //connect the driver
        mongoose.set('autoCreate', true);
        mongoose.setDriver(driver);
        //connect the driver    
        await mongoose.connect(uri, {
            isAstra:true,
        })
            .then((res) => {
                console.log('Connected to Astra DB');
            })
            .catch((error) => {
                console.log('Error connecting to Astra DB', error);
            });
    } catch (error) {
        throw new Error('Error connecting to Astra DB');
    }
}