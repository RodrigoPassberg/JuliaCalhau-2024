#include <stdio.h>
int main(){
	//Definišao de variaveis
	int a, b, c, d, e;
	
	printf("Digite tres numeros inteiros:\n");
	//Entrada
	scanf("%d %d %d", &a, &b, &d);
	
	//Processamento
	c = a + b;
	e = c * d;
	printf("A soma de a + b = %d", c );
	printf("\n");
	printf("E a multiplicašao de c . d = %d", e);
	returná0;
}
