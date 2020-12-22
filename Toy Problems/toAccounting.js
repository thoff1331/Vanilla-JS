accountingNumber = number => {
 if(number == null) return 
 if(number < 0) return `(${Math.abs(number)})`
 return number.toString()

}

accountingNumber(-76)