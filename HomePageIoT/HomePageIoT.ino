#include <DHT.h>
#include <DHT_U.h>
#include <WiFi101.h>
#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>
#include "arduino_secrets.h"

WiFiClient client;
MySQL_Connection conn((Client *)&client);   // Creates the connection object


char ssid[] = SECRET_SSID;
char pass []= SECRET_PASS;


IPAddress server_addr(192, 168, 1, xxx);    // MySQL server IP home - IPv4 - adress

char user[] = SECRET_SQLUSER;                      // MySQL user
char password[] = SECRET_SQLPASS;               // MySQL password
int count = 0;
float soilValue = 0;
float leakValue = 0;
float tempValue = 0;
#define soilSensor A1
#define leakSensor A2
#define tempSensor 5
#define DHTTYPE    DHT11

DHT dht(tempSensor, DHTTYPE);


void setup() {
  
  //exit(0); //Function to exit the program and reset the arduino if needed
  dht.begin();
  Serial.begin(9600);
  Serial.println("Initialising connection");
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, pass);
  
  while (WiFi.status() != WL_CONNECTED) 
  {
    delay(1000);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi Connected");
  Serial.print("Assigned IP: ");
  Serial.println(WiFi.localIP());
  Serial.println("Connecting to database");


  

  while (conn.connect(server_addr, 3306, user, password) != true)  // Looping until MySQL is connected
  {
    delay(2000);
  }

  Serial.println("");
  Serial.println("Connected to SQL Server!");

}

void loop() {
  //Collects the values from the sensors every 10 minutes
  tempValue = dht.readTemperature();
  soilValue = analogRead(soilSensor);
  leakValue = analogRead(leakSensor);
  delay(600000);
  sendData();
   
}

//Function to send data to database
void sendData() {
  MySQL_Cursor *cur_mem = new MySQL_Cursor(&conn);   
  String query = "UPDATE `homepage`.`iotvalues` SET `flower`= " + String(soilValue)+ ", `temp`= " + String(tempValue)+ ", `leak`= " + String(leakValue)+ " WHERE Id='1'";
  const char *q = query.c_str();                          // Konverterar en sträng till en char-array
  cur_mem->execute(q);                              // Utför vår query, och stoppar resultatet i cur_mem, en INSERT ger ingen data tillbaka...
  delete cur_mem;
}
