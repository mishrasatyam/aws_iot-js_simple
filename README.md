# aws_iot_simple
**PREREQUESTIES**
I am using node js 15.3.0\
cd aws_iot_sample && npm install (to install dependencies)\
Assuming your thing name is thing1\
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