var mod = require('./mod');
// ������ module ������ ���������� � ������� ������
console.log(module);

//Module {                       
//  id: '.',                      - ���� � ������������ �����
//  exports: {},                   - ������, ������� ����������� �������� require
//  parent: null,                  - ������������ ������
//  filename: 'D:\\Node\\006_Module\\main.js',  - ���������� ���� � �����
//  loaded: false,                 - ������ ��������� ������
//  children:                      - �������� ������
//      [ Module {
//          id: 'D:\\Node\\006_Module\\maod.js',
//          exports: {},
//          parent: [Circular],
//          filename: 'D:\\Node\\006_Module\\mod.js',
//          loaded: true,
//          children: [],
//          paths: [Object] } ],
//  paths:                - ����, �� ������� ���������� ����� ������
//      [ 'D:\\Node\\006_Module\\node_modules',
//        'D:\\Node\\node_modules',
//        'D:\\node_modules',] }