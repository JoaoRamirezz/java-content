package com.ramirez.java_api;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class Exercicios {
    String status = "";
    Scanner read = new Scanner(System.in);
    List<Integer> grades = new ArrayList<Integer>();

    public double findMean(List<Integer> a){
        int sum = 0;
        int size = a.size();

        for (int i = 0; i < size; i++) {
            sum += a.get(i);
        }

        return (double)sum / size;
    }

    public int findSum(List<Integer> a){
        int sum = 0;

        for (int i = 0; i < a.size(); i++) {
            sum += a.get(i);
        }

        return sum;
    }

    public void verifyStatus(double grade){

        if(grade > 9.0)
            status = "Parabens";
        else if(grade < 3.0)
            status = "Reprovado";
        else if(grade > 7.0)
            status = "Aprovado";
        else
            status = "Recuperação";

        return;
    }

    public void ExAlunos(){
        System.out.printf("Informe a primeira nota: ");
        int n1 = read.nextInt();
        grades.add(n1);

        System.out.printf("Informe a segunda nota: ");
        int n2 = read.nextInt();
        grades.add(n2);


        System.out.printf("Informe a terceira nota: ");
        int n3 = read.nextInt();
        grades.add(n3);


        System.out.printf("Informe a quarta nota: ");
        int n4 = read.nextInt();
        grades.add(n4);

        
        verifyStatus(findMean(grades));
        System.out.printf(status);

    }

    public void NumbersRest11(){
        for (int i = 1000; i < 1999; i++)
            if(i%11 == 5)
                System.out.println(i);
    }

    public void NumbersPairs(){
        int qttOdd = 0;
        for (int i = 0; i < 1000; i++) {
            if(i%2 == 0)
                System.out.println(i);
            else
                qttOdd += 1;
        }
        System.out.println(qttOdd);
    }

    public void BiggerValue(List<Integer> a){
        int maxvalue = Integer.MIN_VALUE;
        for (int value : a) {
            if(value > maxvalue)
                maxvalue = value;
        }

        System.out.println(maxvalue);
    }


}
