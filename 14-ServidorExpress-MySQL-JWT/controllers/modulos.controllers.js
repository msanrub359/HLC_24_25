import { pool } from '../db.js'

export const getModulos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM modulos");
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener modulos", error: error.message });
  }
};

export const getModulo = async (req, res) => {
  try {
    console.log(req.params);
    const {id}=req.params
    const [result] = await pool.query("SELECT * FROM modulos where idModulo=?",[id] );
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener alumnos", error: error.message });
  }
};

export const getModuloCurso = async (req, res) => {
  try {
    console.log(req.params);
    const {idCurso}=req.params
    const [result] = await pool.query("SELECT * FROM modulos where idCurso=?",[idCurso] );
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener modulos", error: error.message });
  }
};

export const addModulo = async (req, res) => {
  try {
    console.log(req.body);
    const {idModulo, desc, idCurso}=req.body;

     const [result]=await pool.query("INSERT INTO modulos (idModulo, descripcion, idCurso) VALUES (?,?,?)", [idModulo, desc, idCurso]);
     console.log(result);

     res.status(201).json({id:result.insertId});
} catch (error) {
    res.status(500).json({
        message:"Error en el servidor"
    })
}
};

export const updateModulo = async (req, res) =>{
  console.log("update");
  try {
    console.log(req.body);
    const {desc, idCurso}=req.body;
    const {id}=req.params;

    const [result]=await pool.query("UPDATE modulos SET descripcion=?, idCurso=? WHERE idModulo=?", [desc, idCurso, id]);
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

export const updatePatchModulo = async (req, res) =>{
  try {
    console.log(req.body);
    const {desc, idCurso}=req.body;
    const {id}=req.params;
    
    const [result]=await pool.query("UPDATE modulos SET descripcion=IFNULL(?,descripcion), idCurso=IFNULL(?, idCurso) WHERE idModulo=?", [desc, idCurso, id]);
    
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

export const delModulo = async (req, res) => {
  
  try {
    console.log({req});
    const {id} =req.params
    const [result]=await pool.query("DELETE FROM modulos WHERE idModulo=?", [id]);
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


