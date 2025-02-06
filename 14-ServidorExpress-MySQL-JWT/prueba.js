import bcrypt from 'bcryptjs';

const generateHash = async () => {
    const plainPassword = 'password2'; // Contraseña en texto plano
    const hash = await bcrypt.hash(plainPassword, 10); // Generar hash con bcrypt
    console.log('Nuevo hash generado:', hash);
};

generateHash();


