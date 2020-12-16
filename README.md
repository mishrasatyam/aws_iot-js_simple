**PREREQUESTIES**\
I am using node js 15.3.0\
Make sure your policy allows node js sdk and topics used by you.\
cd aws_iot_sample && npm install (to install dependencies).\
Assuming your thing name is thing1.\
You will get files like root-CA.Crt , thing1.cert.pem, thing1.private.pem, thing1.public.key and start.sh\
Create a folder called files and put all above files(except start.sh) there.\
create a config.json mentioning below fields and file paths\
You can find endpoint and client_id easily in start.sh file.\
eg : \
{\
    "endpoint":"*****.amazonaws.com",\
    "root_ca_cert":"files/root-CA.crt",\
    "pem_cert": "files/thing1.cert.pem",\
    "private_key":"files/thing1.private.key",\
    "client_id":"sdk-nodejs-******"\
}

**USAGE**\
eg:\
import {create_connection,on_publish,publish} from 'aws_iot_js_simple';\
async function connect(){\
    const connection = await create_connection()//This will create connection\
    await connection.connect();\
    console.log("connected");\
    await connection.subscribe('sensor', 1, on_publish);//Subscribe to topic name 'sensor'\
    //on_publish will print messages sent to topic 'sensor'\
    let json_message = {'Temperature':42.3};\
    publish('sensor',connection,json_message);//publish will publish json_message to topic sensor\ 
}\
connect()\   

****\
This is an attempt to easily perform basic tasks for aws iot core - things.\
It uses aws-iot-device-sdk-v2 . For more details check https://github.com/aws/aws-iot-device-sdk-js-v2\
