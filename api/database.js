// Nossa base de dados fictícia de produtos (versão corrigida e completa com 55 itens)
const produtosFicticios = [
  {
    id: 'MLB001',
    title: 'Filtro de Óleo Lubrificante Tecfil PSL55 Para Fiat Palio',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_775615-MLB48812316473_012022-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'PSL55' }, { id: 'APPLICATIONS', value_name: 'FIAT - PALIO - UNO - SIENA' } ]
  },
  {
    id: 'MLB002',
    title: 'Elemento Filtrante De Ar Linha Pesada - Tecfil AP4650',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_918541-MLB46975217436_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'AP4650' }, { id: 'APPLICATIONS', value_name: 'FORD - MERCEDES-BENZ - FIAT - SCANIA' } ]
  },
  {
    id: 'MLB003',
    title: 'Vela de Ignição NGK BKR6E-D Para Gol G5 / Fox 1.0',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_994119-MLB51421035549_092022-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'BKR6E-D' }, { id: 'APPLICATIONS', value_name: 'VW - GOL - FOX - VOYAGE' } ]
  },
  {
    id: 'MLB004',
    title: 'Kit Correia Dentada e Tensor Dayco KTB253 Fiesta Ka',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_632617-MLB73366395593_122023-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'KTB253' }, { id: 'APPLICATIONS', value_name: 'FORD - FIESTA - KA - ECOSPORT' } ]
  },
  {
    id: 'MLB005',
    title: 'Amortecedor Dianteiro Cofap GP32992M Corsa Classic',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_832101-MLB48057201728_102021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'GP32992M' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - CORSA - CELTA - PRISMA' } ]
  },
  {
    id: 'MLB006',
    title: 'Pastilha de Freio Cobreq N-523 para Honda Civic',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_676759-MLB50186105392_062022-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'N-523' }, { id: 'APPLICATIONS', value_name: 'HONDA - CIVIC - FIT - CITY' } ]
  },
  {
    id: 'MLB007',
    title: 'Bomba D\'água Urba UB0630 para VW Gol 1.6 AP',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_998782-MLB47985458622_102021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'UB0630' }, { id: 'APPLICATIONS', value_name: 'VW - GOL - SAVEIRO - PARATI' } ]
  },
  {
    id: 'MLB008',
    title: 'Kit Embreagem Luk 620302800 para Chevrolet Onix',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_675877-MLB53331668037_012023-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '620302800' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - ONIX - PRISMA - COBALT' } ]
  },
  {
    id: 'MLB009',
    title: 'Óleo de Motor 5W30 Sintético AC Delco para Cruze',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_930882-MLB74073330685_012024-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'ACD5W30' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - CRUZE - SONIC - TRACKER' } ]
  },
  {
    id: 'MLB010',
    title: 'Filtro de Ar Fram CA5970 para Toyota Corolla',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_761594-MLB46975193952_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'CA5970' }, { id: 'APPLICATIONS', value_name: 'TOYOTA - COROLLA - FIELDER' } ]
  },
  {
    id: 'MLB011',
    title: 'Amortecedor Traseiro Monroe SP057 para Ford Ka',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_928873-MLB46552331549_062021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'SP057' }, { id: 'APPLICATIONS', value_name: 'FORD - KA - FIESTA' } ]
  },
  {
    id: 'MLB012',
    title: 'Bateria Moura M60AD 60Ah para Fiat Strada',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_882933-MLB74052063051_012024-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'M60AD' }, { id: 'APPLICATIONS', value_name: 'FIAT - STRADA - PALIO - IDEA' } ]
  },
  {
    id: 'MLB013',
    title: 'Disco de Freio Fremax BD4751 para Hyundai HB20',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_994969-MLB46934863385_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'BD4751' }, { id: 'APPLICATIONS', value_name: 'HYUNDAI - HB20 - HB20S' } ]
  },
  {
    id: 'MLB014',
    title: 'Rolamento de Roda SKF VKBC20023 para Renault Sandero',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_624466-MLB46297597223_062021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'VKBC20023' }, { id: 'APPLICATIONS', value_name: 'RENAULT - SANDERO - LOGAN - CLIO' } ]
  },
  {
    id: 'MLB015',
    title: 'Pivô de Suspensão Nakata N-1052 para VW Fox',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_812888-MLB46975200388_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'N-1052' }, { id: 'APPLICATIONS', value_name: 'VW - FOX - POLO - GOLF' } ]
  },
  {
    id: 'MLB016',
    title: 'Sonda Lambda Bosch 0258006978 para Jeep Renegade',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_983279-MLB47984852899_102021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '0258006978' }, { id: 'APPLICATIONS', value_name: 'JEEP - RENEGADE - COMPASS - FIAT TORO' } ]
  },
  {
    id: 'MLB017',
    title: 'Terminal de Direção TRW JARB0021 para Fiat Toro',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_850283-MLB46975193938_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'JARB0021' }, { id: 'APPLICATIONS', value_name: 'FIAT - TORO - JEEP RENEGADE' } ]
  },
  {
    id: 'MLB018',
    title: 'Filtro de Combustível Mahle KL582 para Toyota Hilux',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_735749-MLB46934849023_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'KL582' }, { id: 'APPLICATIONS', value_name: 'TOYOTA - HILUX - SW4' } ]
  },
  {
    id: 'MLB019',
    title: 'Vela de Ignição Iridium NGK SILZKR7C11DS para Creta',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_956749-MLB46975200392_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'SILZKR7C11DS' }, { id: 'APPLICATIONS', value_name: 'HYUNDAI - CRETA - ELANTRA' } ]
  },
  {
    id: 'MLB020',
    title: 'Kit Batente Amortecedor Axios 0441517 para Celta',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_699119-MLB46162331562_052021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '0441517' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - CELTA - PRISMA - CORSA' } ]
  },
  {
    id: 'MLB021',
    title: 'Correia de Acessórios Contitech 6PK2240 para S10',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_983199-MLB46934849026_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '6PK2240' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - S10 - BLAZER' } ]
  },
  {
    id: 'MLB022',
    title: 'Homocinética Vetor VT5031 para Peugeot 206',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_864366-MLB46975193946_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'VT5031' }, { id: 'APPLICATIONS', value_name: 'PEUGEOT - 206 - 207 - CITROEN C3' } ]
  },
  {
    id: 'MLB023',
    title: 'Bobina de Ignição Magneti Marelli BI0027MM para Uno',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_688325-MLB46162319081_052021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'BI0027MM' }, { id: 'APPLICATIONS', value_name: 'FIAT - UNO - PALIO - FIORINO' } ]
  },
  {
    id: 'MLB024',
    title: 'Radiador Valeo 732895R para Renault Duster',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_956793-MLB46975193949_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '732895R' }, { id: 'APPLICATIONS', value_name: 'RENAULT - DUSTER - OROCH - LOGAN' } ]
  },
  {
    id: 'MLB025',
    title: 'Bico Injetor Bosch 0280156393 para Ford Ecosport',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_653911-MLB46162331569_052021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '0280156393' }, { id: 'APPLICATIONS', value_name: 'FORD - ECOSPORT - FIESTA - FOCUS' } ]
  },
  {
    id: 'MLB026',
    title: 'Sensor de Rotação MTE-Thomson 7041 para Corsa',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_603885-MLB46162319085_052021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '7041' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - CORSA - MERIVA - MONTANA' } ]
  },
  {
    id: 'MLB027',
    title: 'Atuador de Marcha Lenta Delphi ICD00127 para Palio',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_994119-MLB46162331572_052021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'ICD00127' }, { id: 'APPLICATIONS', value_name: 'FIAT - PALIO - SIENA - STRADA' } ]
  },
  {
    id: 'MLB028',
    title: 'Cabo de Vela NGK ST-V25 para VW Gol G4',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_699119-MLB46162331575_052021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'ST-V25' }, { id: 'APPLICATIONS', value_name: 'VW - GOL - FOX - VOYAGE' } ]
  },
  {
    id: 'MLB029',
    title: 'Trizeta Garma 6023 para Honda Fit',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_928873-MLB46552331580_062021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '6023' }, { id: 'APPLICATIONS', value_name: 'HONDA - FIT - CITY' } ]
  },
  {
    id: 'MLB030',
    title: 'Palheta Limpador Bosch Aerofit AF340 para Onix',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_812888-MLB46975200388_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'AF340' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - ONIX - PRISMA' } ]
  },
  {
    id: 'MLB031',
    title: 'Junta Homocinética Cofap JHC03110 para Celta',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_624466-MLB46297597223_062021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'JHC03110' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - CELTA - CORSA' } ]
  },
  {
    id: 'MLB032',
    title: 'Sensor de Pressão de Óleo Iguaçu 2387 para Ka',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_850283-MLB46975193938_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '2387' }, { id: 'APPLICATIONS', value_name: 'FORD - KA - FIESTA - COURIER' } ]
  },
  {
    id: 'MLB033',
    title: 'Coxim do Motor Sampel 2721 para Gol AP',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_994969-MLB46934863385_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '2721' }, { id: 'APPLICATIONS', value_name: 'VW - GOL - SAVEIRO - VOYAGE' } ]
  },
  {
    id: 'MLB034',
    title: 'Lanterna Traseira Arteb 0460361 para Palio Fire',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_882933-MLB74052063051_012024-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '0460361' }, { id: 'APPLICATIONS', value_name: 'FIAT - PALIO - SIENA' } ]
  },
  {
    id: 'MLB035',
    title: 'Farol Principal TYC 20-A659-05-2B para Corolla',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_928873-MLB46552331549_062021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '20-A659' }, { id: 'APPLICATIONS', value_name: 'TOYOTA - COROLLA' } ]
  },
  {
    id: 'MLB036',
    title: 'Bieleta da Barra Estabilizadora Grazzimetal VW1258',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_761594-MLB46975193952_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'VW1258' }, { id: 'APPLICATIONS', value_name: 'VW - GOLF - JETTA - AUDI A3' } ]
  },
  {
    id: 'MLB037',
    title: 'Fluido de Freio DOT4 Bosch 500ml',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_930882-MLB74073330685_012024-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'DOT4BOSCH' }, { id: 'APPLICATIONS', value_name: 'UNIVERSAL - VEÍCULOS LEVES' } ]
  },
  {
    id: 'MLB038',
    title: 'Aditivo para Radiador Koube Bardahl Rad Cool Plus',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_675877-MLB53331668037_012023-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'KBRCPLUS' }, { id: 'APPLICATIONS', value_name: 'UNIVERSAL - LINHA LEVE E PESADA' } ]
  },
  {
    id: 'MLB039',
    title: 'Lâmpada H4 Philips 12342C1 para Farol',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_998782-MLB47985458622_102021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '12342C1' }, { id: 'APPLICATIONS', value_name: 'UNIVERSAL - COMPATÍVEL COM SOQUETE H4' } ]
  },
  {
    id: 'MLB040',
    title: 'Bomba de Combustível Bosch F000TE159A para Celta',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_676759-MLB50186105392_062022-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'F000TE159A' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - CELTA - PRISMA' } ]
  },
  {
    id: 'MLB041',
    title: 'Filtro de Cabine (Ar Condicionado) Wega AKX-35321',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_832101-MLB48057201728_102021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'AKX-35321' }, { id: 'APPLICATIONS', value_name: 'HONDA - FIT - CITY - WRV' } ]
  },
  {
    id: 'MLB042',
    title: 'Mangueira do Filtro de Ar Jamaica 30210 para Corsa',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_632617-MLB73366395593_122023-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '30210' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - CORSA - CLASSIC' } ]
  },
  {
    id: 'MLB043',
    title: 'Retentor do Virabrequim Sabó 05253BRAGF para Gol',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_994119-MLB51421035549_092022-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '05253BRAGF' }, { 'value_name': 'VW - GOL - FOX - SAVEIRO', id: 'APPLICATIONS' } ]
  },
  {
    id: 'MLB044',
    title: 'Tampa do Reservatório de Água Flório F-16 para Uno',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_918541-MLB46975217436_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'F-16' }, { id: 'APPLICATIONS', value_name: 'FIAT - UNO - PALIO - STRADA' } ]
  },
  {
    id: 'MLB045',
    title: 'Cilindro Mestre de Freio Controil C-2052 para Fusca',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_775615-MLB48812316473_012022-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'C-2052' }, { id: 'APPLICATIONS', value_name: 'VW - FUSCA - BRASILIA - VARIANT' } ]
  },
  {
    id: 'MLB046',
    title: 'Válvula Termostática Wahler 4153.87D para Clio',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_775615-MLB48812316473_012022-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '4153.87D' }, { id: 'APPLICATIONS', value_name: 'RENAULT - CLIO - SANDERO - LOGAN' } ]
  },
  {
    id: 'MLB047',
    title: 'Interruptor de Ré 3-RHO 4426 para Câmbio Eaton',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_918541-MLB46975217436_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '4426' }, { id: 'APPLICATIONS', value_name: 'FORD - GM - EATON - UNIVERSAL' } ]
  },
  {
    id: 'MLB048',
    title: 'Junta Tampa de Válvula Elring 563.490 para Focus',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_994119-MLB51421035549_092022-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '563.490' }, { id: 'APPLICATIONS', value_name: 'FORD - FOCUS - ECOSPORT - FIESTA' } ]
  },
  {
    id: 'MLB049',
    title: 'Comando de Válvulas Sambel SB-277 para Corsa 1.0',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_632617-MLB73366395593_122023-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'SB-277' }, { id: 'APPLICATIONS', value_name: 'CHEVROLET - CORSA - CELTA' } ]
  },
  {
    id: 'MLB050',
    title: 'Bronzina de Biela Mahle SBB-250-J STD para AP',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_832101-MLB48057201728_102021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'SBB-250-J' }, { id: 'APPLICATIONS', value_name: 'VW - MOTOR AP 1.6/1.8/2.0' } ]
  },
  {
    id: 'MLB051',
    title: 'Pistão com Anéis Mahle E-70750 STD para Fire',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_676759-MLB50186105392_062022-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'E-70750' }, { id: 'APPLICATIONS', value_name: 'FIAT - MOTOR FIRE 1.0 8V' } ]
  },
  {
    id: 'MLB052',
    title: 'Coifa da Homocinética Sabó 78954 Lado Roda',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_998782-MLB47985458622_102021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '78954' }, { id: 'APPLICATIONS', value_name: 'UNIVERSAL - VEÍCULOS LEVES' } ]
  },
  {
    id: 'MLB053',
    title: 'Cruzeta do Cardan Spicer 5-153X para D20',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_675877-MLB53331668037_012023-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '5-153X' }, { id: 'APPLICATIONS', value_name: 'GM - D20 - SILVERADO - FORD F1000' } ]
  },
  {
    id: 'MLB054',
    title: 'Diafragma do Carburador Brosol 281145 para Uno',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_930882-MLB74073330685_012024-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: '281145' }, { id: 'APPLICATIONS', value_name: 'FIAT - UNO - PREMIO - ELBA' } ]
  },
  {
    id: 'MLB055',
    title: 'Boia de Combustível TSA T-010027 para Gol Bola',
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_761594-MLB46975193952_082021-I.jpg',
    permalink: '#',
    attributes: [ { id: 'PART_NUMBER', value_name: 'T-010027' }, { id: 'APPLICATIONS', value_name: 'VW - GOL G2/G3/G4 - PARATI' } ]
  }
];