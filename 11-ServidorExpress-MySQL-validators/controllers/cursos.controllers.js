import { pool } from '../db.js'

export const getCursos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM cursos");
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener cursos", error: error.message });
  }
};

export const getCurso = async (req, res) => {
  try {
    console.log(req.params);
    const {id}=req.params
    const [result] = await pool.query("SELECT * FROM cursos where idCurso=?",[id] );
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener alumnos", error: error.message });
  }
};

export const addCurso = async (req, res) => {
  try {
    console.log(req.body);
    const {desc, idCurso}=req.body;

     const [result]=await pool.query("INSERT INTO cursos (descripcion, idCurso) VALUES (?,?)", [desc, idCurso]);
     console.log(result);

     res.status(201).json({id:result.insertId});
} catch (error) {
    res.status(500).json({
        message:"Error en el servidor"
    })
}
};

export const updateCurso = async (req, res) =>{
  console.log("update");
  try {
    console.log(req.body);
    const {desc, idCiclo}=req.body;
    const {id}=req.params;

    const [result]=await pool.query("UPDATE cursos SET descripcion=? WHERE idCurso=?", [desc, id]);
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

export const updatePatchCurso = async (req, res) =>{
  try {
    console.log(req.body);
    const {desc}=req.body;
    const {id}=req.params;
    
    const [result]=await pool.query("UPDATE cursos SET descripcion=IFNULL(?,descripcion) WHERE idCurso=?", [desc, id]);
    
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

export const delCurso = async (req, res) => {
  
  try {
    // console.log({req});
    const {id} =req.params
    const [result] = await pool.query("DELETE FROM cursos WHERE idCurso=?", [id]);
    
    const {affectedRows} = result
    if (affectedRows==0){
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


