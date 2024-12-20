import { pool } from '../db.js'

export const getCalificaciones = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM calificaciones");
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener calificaciones", error: error.message });
  }
};

export const getCalificacion = async (req, res) => {
  try {
   
    const {id}=req.params
    const [result] = await pool.query("SELECT * FROM calificaciones where idCalificaciones=?",[id] );
   
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener la calificación", error: error.message });
  }
};

export const getCursoCalificacion = async (req, res) => {
  try {
   
    const {id}=req.params
    const [result] = await pool.query("SELECT * FROM calificaciones where idCurso=?",[id] );
   
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener la calificación", error: error.message });
  }
};

export const addCalificacion = async (req, res) => {
  try {
    console.log(req.body);
    const {idCurso, idModulo, idAlumno, calificacion}=req.body;

     const [result]=await pool.query("INSERT INTO calificaciones (idCurso, idModulo, idAlumno, calificacion) VALUES (?,?,?,?)", [idCurso, idModulo, idAlumno, calificacion]);
     console.log(result);

     res.status(201).json({id:result.insertId});
} catch (error) {
    res.status(500).json({
        message:"Error en el servidor"
    })
}
};

export const updateCalificacion = async (req, res) =>{
  
  try {
   
    const {idCurso, idModulo, idAlumno, calificacion}=req.body;
    const {id}=req.params;
    console.log(id);
    const [result]=await pool.query("UPDATE calificaciones SET idCurso=?, idModulo=?, idAlumno=?, calificacion=? WHERE idCalificaciones=?", [idCurso, idModulo, idAlumno, calificacion, id]);
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

export const updatePatchCalificacion = async (req, res) =>{
  try {
    console.log(req.body);
    const {idCurso, idModulo, idAlumno, calificacion}=req.body;
    const {id}=req.params;
    
    const [result]=await pool.query("UPDATE calificaciones SET idCurso=IFNULL(?,idCurso), idModulo=IFNULL(?,idModulo), idAlumno=IFNULL(?,idAlumno), calificacion=IFNULL(?,calificacion) WHERE idCalificaciones=?", [idCurso, idModulo, idAlumno, calificacion, id]);
    
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

export const delCalificacion = async (req, res) => {
  
  try {
    console.log({req});
    const {id} =req.params
    const [result]=await pool.query("DELETE FROM calificaciones WHERE idCalificaciones=?", [id]);
    console.log(result);
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


