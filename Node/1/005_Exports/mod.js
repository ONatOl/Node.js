// �� �������� ������ global �� ������������
// ����������, ����������� ������ ������,
// �������� ���������� ��� ������
var x = 10;

function test() {
    console.log('Test function, number = ', x);
};

// ����� ���������� ���� �������� � ������ ������,
// ���������� �������� �� � ������   exports
// exports -  ������, ������� ������������ �������� require 

exports.number = x;
exports.func = test;

// exports = x; // Error
// ����� ��  �������� exports ��������� �����-�� ��������,
// �� ��� �������� �������� �� ������ � ������ exports, � 
// � ������ module.exports, �.�. ��� ������ ����������� 
// �������� module � � ���� ���� ��-�� exports,
// module.exports ������ ������,
// ������� ����� ���������������� � ������,
// � ������� ���������� ����������� �������� ������, � 
// ����� exports ������������, ��� �����, � ���� 
// �������� exports ������ ������ �� ������ module.exports
// ����� �������, ����� �� ��������� �������
// exports = x; 
// �� ������ ������ ������, � ��� ������ module.exports
//�������� ������
// ��������� module.exports = x; �������� ��� main.js �������
// ���������� obj = 10, �.�. �� �������� ��������������� ��� ������, 
// ������� ����� ������������ 
// ������ � ������� module.exports ����� �������� �� ������ ���������
// �����  exports, ����� this:  
// this = x;


