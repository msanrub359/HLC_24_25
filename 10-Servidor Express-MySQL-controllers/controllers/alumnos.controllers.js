import { pool } from '../db.js'

export const getAlumnos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM alumnos");
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener alumnos", error: error.message });
  }
};

export const getAlumno = async (req, res) => {
  try {
    console.log(req.params);
    const {id}=req.params
    const [result] = await pool.query("SELECT * FROM alumnos where idAlumno=?",[id] );
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener alumnos", error: error.message });
  }
};

export const getAlumnoCurso = async (req, res) => {
  try {
    console.log(req.params);
    const {idCurso}=req.params
    const [result] = await pool.query("SELECT * FROM alumnos where idCurso=?",[idCurso] );
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener alumnos", error: error.message });
  }
};

export const addAlumno = async (req, res) => {
  try {
    console.log(req.body);
    const {nameAl, idCurso}=req.body;

     const [result]=await pool.query("INSERT INTO alumnos (apellidosNombre, idCurso) VALUES (?,?)", [nameAl, idCurso]);
     console.log(result);

     res.status(201).json({id:result.insertId});
} catch (error) {
    res.status(500).json({
        message:"Error en el servidor"
    })
}
};

export const updateAlumno = async (req, res) =>{
  try {
    console.log(req.body);
    const {nameAl, idCurso}=req.body;
    const {id}=req.params;

    const [result]=await pool.query("UPDATE alumnos SET apellidosNombre=?, idCurso=? WHERE idAlumno=?", [nameAl, idCurso, id]);
    //const [result]=await pool.query("UPDATE alumnos SET apellidosNombre=IFNULL(?,apellidosNombre), idCurso=IFNULL(?, idCurso) WHERE idAlumno=?", [nameAl, idCiclo, id]);
    
     console.log(result);
     if (result.affectedRows==0){
        return res.status(400).json({
            message:'no existe'
        })
     }else{
        return res.status(200).json({
            message:'ha sido actualizado'
        })
     }

} catch (error) {
    res.status(500).json({
        message:"Error en el servidor"
    })
}

}

export const updatePatchAlumno = async (req, res) =>{
  try {
    console.log(req.body);
    const {nameAl, idCurso}=req.body;
    const {id}=req.params;
    
    const [result]=await pool.query("UPDATE alumnos SET apellidosNombre=IFNULL(?,apellidosNombre), idCurso=IFNULL(?, idCurso) WHERE idAlumno=?", [nameAl, idCurso, id]);
    
     console.log(result);
     if (result.affectedRows==0){
        return res.status(400).json({
            message:'no existe'
        })
     }else{
        return res.status(200).json({
            message:'ha sido actualizado'
        })
     }

} catch (error) {
    res.status(500).json({
        message:"Error en el servidor"
    })
}

}

export const delAlumno = async (req, res) => {
  
  try {
    console.log({req});
    const {id} =req.params
    const [result]=await pool.query("DELETE FROM alumnos WHERE idAlumno=?", [id]);
    console.log('borrado', result);
    if (result.affectedRows==0){
        return res.status(400).json({
            message:'no existe'
        })
    }else{
        return res.status(200).json({
            message:'ha sido borrado'
        })
    }
} catch (error) {
    res.status(500).json({
        message:"Error en el servidor"
    })
}
};


