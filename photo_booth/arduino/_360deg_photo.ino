#include <Servo.h> 
 
#define PIN_CAM_S 11
#define PIN_CAM_F 12
#define PIN_LED 13
#define BTN_IN 10

#define STEP 5

Servo myservo;
 
int pos = 0;
 
void setup() 
{       
  Serial.begin(9600);
  myservo.attach(9);
  pinMode(PIN_CAM_S, OUTPUT);     
  pinMode(PIN_CAM_F, OUTPUT);     
  pinMode(PIN_LED, OUTPUT);
  pinMode (BTN_IN, INPUT);  
} 
 int val;
 
void loop() 
{ 
  val = digitalRead(BTN_IN);
  if(val==1)
  {
    takeRotationPhoto();
  }
  else 
  {
    delay(500);
  }
} 
void takeRotationPhoto() {
  
  startupPosition();
  for(pos = 10; pos <= 110; pos += STEP) 
  {
    myservo.write(pos);
    delay(5000);
    takeSinglePhoto();
  }
 delay(1000);
}
void takeSinglePhoto ()
{
   takePhoto(100);
   delay(3000);
}
/**
  GWS125-1T
  360deg = 100
*/
void startupPosition ()
{
   myservo.write(10);
  delay(10000); 
}
void takeHDR () 
{
    takePhoto(500);
    takePhoto(1000);
    takePhoto(2000); 
}

void takePhoto (int exposure) 
{
   
    digitalWrite(PIN_CAM_S, HIGH);
    digitalWrite(PIN_CAM_F, HIGH);
    digitalWrite(PIN_LED, HIGH);
    delay(exposure);
    digitalWrite(PIN_CAM_S, LOW);
    digitalWrite(PIN_CAM_F, LOW);
    digitalWrite(PIN_LED, LOW);
    delay(600);
}
