package org.joonzis.DI_2;

public class TVUser {
	public static void main(String[] args) {
		TV ltv = new LgTV();
		ltv.powerOn();
		ltv.powerOff();
		ltv.volumeUp();
		ltv.volumeDown();
		
		System.out.println("-------------------------");
		
		TV stv = new SamsungTV();
		stv.powerOn();
		stv.powerOff();
		stv.volumeUp();
		stv.volumeDown();
	}
}
