function fromBytesToFormattedSizeUnits(bytes, precision = 3) {
    // Aqui podemos poner un condicional para que no afecte a los negativos ya que es imposible . 
    const sizeUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let unitIndex = 0;
    let size = bytes;
  
    while (size >= 1024 && unitIndex < sizeUnits.length - 1) {
      size /= 1024; //en el ejercicio la base a dividir está mal porque lo divide por 1000 .
      unitIndex++;
    }
  
    return size.toPrecision(precision) + sizeUnits[unitIndex];
  }
  