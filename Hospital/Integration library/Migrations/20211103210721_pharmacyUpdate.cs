using Microsoft.EntityFrameworkCore.Migrations;

namespace Integration_library.Migrations
{
    public partial class pharmacyUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PharmacyId",
                table: "Feedbacks");

            migrationBuilder.AddColumn<string>(
                name: "PharmacyName",
                table: "Feedbacks",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PharmacyName",
                table: "Feedbacks");

            migrationBuilder.AddColumn<int>(
                name: "PharmacyId",
                table: "Feedbacks",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
