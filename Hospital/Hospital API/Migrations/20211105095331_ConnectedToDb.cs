using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Hospital_API.Migrations
{
    public partial class ConnectedToDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Functionality",
                table: "Feedbacks");

            migrationBuilder.DropColumn(
                name: "FunctionalityType",
                table: "Feedbacks");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "Persons",
                newName: "gender");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Feedbacks",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "gender",
                table: "Persons",
                newName: "Gender");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Feedbacks",
                type: "timestamp without time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Functionality",
                table: "Feedbacks",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FunctionalityType",
                table: "Feedbacks",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
