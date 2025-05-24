export interface Credito {
  numeroCredito: String;
  numeroNfse: String;
  dataConstituicao: Date;
  valorIssqn: Number;
  tipoCredito: String;
  simplesNacional: Boolean;
  aliquota: Number;
  valorFaturado: Number;
  valorDeducao: Number;
  baseCalculo: Number;
}
