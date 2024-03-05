int[] v10 = new int [40];
int[] v20 = new int [80];
int i = x+40/16;
int i = x+40/16;
int[] v;
...
switch(i) {
case 40: v = v40; break;
case 80: v = v80; break;
default: v = new int[i]; break;
}

int[] primos = { 2,3,5,7,11,13,17,19 };
char[] dd = { 'd','s','t','q','q','s','s'};
String[] meses = {"jan","fev","mar","abr" };

int[] f = new int[10];
  f[0] = 0; f[1] = 1;
for( int i = 2; i < 10; i++ )
  f[i] = f[i-1]+f[i-2];

public static void main(String[] args){
  int[] primos = { 2,3,5,7,11,13,17,19,23,29,31 };
  int[] somas = new int[11];
for(int i = 0; i < 11; i++){
  somas[i] = 0;
for(int j = 0; j <= i; j++)
for(int j = 0; j <= i; j++)
  somas[i] += primos[j];
}
  System.out.print("somas:“+somas);
for(int i = 0; i < 11; i++)
  System.out.print(" “+somas[i]);
  System.out.println();
}

public static void main(String[] args){
   int[][] p = new int[10][];
for(int i = 0; i < 10; i++)
   p[i] = new int[i+1];
for(int i = 0; i < 10; i++){
   p[i][0] = 1;
   p[i][0] = 1;
   p[i][i] = 1;
for(int j = 1; j < i; j++)
   p[i][j] = p[i-1][j-1]+p[i-1][j];
}
}

public static void main(String[] args){
int[] dias_mes = {31,29,31,30,31,30,31,31,30,31,30,31};
  float[][] gastos = new float[12][];
  float[][] gastos = new float[12][];
for(int m = 0; m < 12; m++) {
  gastos[m] = new float[dias_mes[m]];
for(int d = 0; d < dias_mes[m]; d++)
  gastos[m][d] = 0.0F;
}
}

for(int m = 0; m < dias_mes.length; m++){
  gastos[m] = new float[dias_mes[m]];
for(int d = 0; d < gastos[m].length; d++)
  gastos[m][d] = 0.0F;
}
