using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Teatr.Migrations
{
    public partial class TypeHistonic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TypeHistonics",
                columns: table => new
                {
                    TypeHistonicId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TypeHistonics", x => x.TypeHistonicId);
                });

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 12, 10, 54, 8, 584, DateTimeKind.Local).AddTicks(291));

            migrationBuilder.InsertData(
                table: "TypeHistonics",
                columns: new[] { "TypeHistonicId", "Name" },
                values: new object[,]
                {
                    { 1, "Велика сцена" },
                    { 2, "Мала сцена" },
                    { 3, "Для дітей" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TypeHistonics");

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 10, 20, 44, 32, 372, DateTimeKind.Local).AddTicks(5753));
        }
    }
}
