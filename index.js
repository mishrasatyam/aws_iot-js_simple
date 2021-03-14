import { mqtt, io, iot } from 'aws-iot-device-sdk-v2';
import {readFile} from 'fs/promises';
import ArrayBufferToJson from 'arraybuffertojson'

export async function create_connection(){
    const {endpoint,root_ca_cert,pem_cert,private_key,client_id} = JSON.parse(await readFile('config.json')) 
    const client_bootstrap = new io.ClientBootstrap();
    const config_builder = iot.AwsIotMqttConnectionConfigBuilder.new_mtls_builder_from_path(pem_cert, private_key);
    config_builder.with_certificate_authority_from_path(undefined,root_ca_cert);
    config_builder.with_clean_session(true);
    config_builder.with_client_id(client_id);
    config_builder.with_endpoint(endpoint);
    const timer = setTimeout(() => {}, 60 * 1000);
    const config = config_builder.build();
    const client = new mqtt.MqttClient(client_bootstrap);
    const connection = client.new_connection(config);
    return connection
}

export async function on_publish(topic, payload){
    let message = ArrayBufferToJson(payload)
    console.log(`Publish received on topic ${topic}`,message);
    return message;
}

export async function publish(topic,connection,json_message){
    const json = JSON.stringify(json_message);
    connection.publish(topic, json, 1);
}
