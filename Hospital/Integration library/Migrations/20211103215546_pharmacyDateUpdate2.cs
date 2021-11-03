using Microsoft.EntityFrameworkCore.Migrations;

namespace Integration_library.Migrations
{
    public partial class pharmacyDateUpdate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Feedbacks",
                newName: "FeedbackDate");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FeedbackDate",
                table: "Feedbacks",
                newName: "Date");
        }
    }
}
