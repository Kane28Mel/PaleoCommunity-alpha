CREATE DATABASE IF NOT EXISTS PaleoCommunity;

USE PaleoCommunity;

CREATE TABLE Usuarios (
    id_usuario      INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(128)    NOT NULL,
    email           VARCHAR(255)    NOT NULL,
    contraseña      VARCHAR(255)    NOT NULL,
    foto            VARCHAR(255)    NOT NULL,
    info            VARCHAR(255)    NOT NULL,
    actividad       VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE Categorias (
    id_categoria                   INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre_categoria               VARCHAR(255)        NOT NULL,
    descripcion_categoria          VARCHAR(255)        NOT NULL,
    PRIMARY KEY     (id_categoria)
);

CREATE TABLE Foros (
    id_foro                 INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre_foro             VARCHAR(255)        NOT NULL,
    contenido_foro          VARCHAR(255)        NOT NULL,
    fk_id_categoria         INTEGER             NOT NULL,
    fecha                   DATE                NOT NULL,
    PRIMARY KEY             (id_foro),
    FOREIGN KEY             (fk_id_categoria)   REFERENCES Categorias(id_categoria)
);

CREATE TABLE Publicacion (
    id_publicacion    INTEGER             NOT NULL    AUTO_INCREMENT,
    contenido         VARCHAR(255)        NOT NULL,
    fecha             VARCHAR(255)        NOT NULL,
    fk_id_usuario     INTEGER             NOT NULL,
    votos             VARCHAR(255)        NOT NULL,
    fk_id_foro        INTEGER             NOT NULL,
    PRIMARY KEY       (id_publicacion),
    FOREIGN KEY       (fk_id_usuario)     REFERENCES Usuarios(id_usuario),
    FOREIGN KEY       (fk_id_foro)        REFERENCES Foros(id_foro)
);

CREATE TABLE Seguidores (
    id_seguidor             INTEGER             NOT NULL    AUTO_INCREMENT,
    fk_id_usuario_seguidor  INTEGER             NOT NULL,
    fk_id_usuario_seguido   INTEGER             NOT NULL,
    fecha_seguimiento       DATE                NOT NULL,
    PRIMARY KEY             (id_seguidor),
    FOREIGN KEY             (fk_id_usuario_seguidor) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY             (fk_id_usuario_seguido)  REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Notificaciones (
    id_notificacion        INTEGER             NOT NULL    AUTO_INCREMENT,
    fk_id_usuario          INTEGER             NOT NULL,
    tipo_notificacion      VARCHAR(255)        NOT NULL,
    fk_id_elemento         INTEGER             NOT NULL,
    estado                 BOOLEAN             NOT NULL,
    PRIMARY KEY            (id_notificacion),
    FOREIGN KEY            (fk_id_usuario)     REFERENCES Usuarios(id_usuario),
    FOREIGN KEY            (fk_id_elemento)    REFERENCES Publicacion(id_publicacion)
);