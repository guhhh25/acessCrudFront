QUERYS DO BANCO 

CREATE DATABASE CarDB;


USE CarDB
CREATE TABLE dbo.Brands (
    Id INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100) NOT NULL
);



CREATE TABLE dbo.Cars (
    Id INT PRIMARY KEY IDENTITY,
    BrandId INT NOT NULL FOREIGN KEY REFERENCES dbo.Brands(Id),
    Model NVARCHAR(100) NOT NULL,
    Year INT NOT NULL,
    Color NVARCHAR(50) NULL
);


CREATE PROCEDURE dbo.InsertCar
    @BrandId INT,
    @Model NVARCHAR(100),
    @Year INT,
    @Color NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Cars (BrandId, Model, Year, Color)
    VALUES (@BrandId, @Model, @Year, @Color);
END

CREATE PROCEDURE dbo.UpdateCar
    @Id INT,
    @BrandId INT,
    @Model NVARCHAR(100),
    @Year INT,
    @Color NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Cars
    SET BrandId = @BrandId,
        Model = @Model,
        Year = @Year,
        Color = @Color
    WHERE Id = @Id;
END


CREATE PROCEDURE dbo.DeleteCar
    @Id INT
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM Cars
    WHERE Id = @Id;
END
GO


CREATE PROCEDURE dbo.GetAllCars
AS
BEGIN
    SET NOCOUNT ON;

    SELECT Id, BrandId, Model, Year, Color
    FROM Cars;
END
GO


CREATE PROCEDURE dbo.UpdateBrand
    @Id INT,
    @Name NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Brands
    SET Name = @Name
    WHERE Id = @Id;
END


CREATE PROCEDURE dbo.DeleteBrand
    @Id INT
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM Brands
    WHERE Id = @Id;
END


CREATE PROCEDURE dbo.GetAllBrands
AS
BEGIN
    SET NOCOUNT ON;

    SELECT Id, Name
    FROM Brands;
END

CREATE PROCEDURE dbo.InsertBrand
    @Name NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Brands (Name)
    VALUES (@Name);
END