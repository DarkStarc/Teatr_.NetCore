using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Teatr.Migrations
{
    public partial class addAutor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "Histonics",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 17, 20, 42, 57, 164, DateTimeKind.Local).AddTicks(1226));

            migrationBuilder.UpdateData(
                table: "Histonics",
                keyColumn: "HistonicId",
                keyValue: 1,
                columns: new[] { "Author", "TypeId" },
                values: new object[] { "Майкл Фрейн '\n' комедія на 2 дії", 1 });

            migrationBuilder.UpdateData(
                table: "TypeHistonics",
                keyColumn: "TypeHistonicId",
                keyValue: 1,
                column: "Name",
                value: "Велика сцена");

            migrationBuilder.UpdateData(
                table: "TypeHistonics",
                keyColumn: "TypeHistonicId",
                keyValue: 2,
                column: "Name",
                value: "Мала сцена");

            migrationBuilder.UpdateData(
                table: "TypeHistonics",
                keyColumn: "TypeHistonicId",
                keyValue: 3,
                column: "Name",
                value: "Для дітей");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Author",
                table: "Histonics");

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 12, 10, 59, 44, 882, DateTimeKind.Local).AddTicks(4570));

            migrationBuilder.UpdateData(
                table: "Histonics",
                keyColumn: "HistonicId",
                keyValue: 1,
                column: "TypeId",
                value: null);

            migrationBuilder.UpdateData(
                table: "TypeHistonics",
                keyColumn: "TypeHistonicId",
                keyValue: 1,
                column: "Name",
                value: "Большая сцена");

            migrationBuilder.UpdateData(
                table: "TypeHistonics",
                keyColumn: "TypeHistonicId",
                keyValue: 2,
                column: "Name",
                value: "Малая сцена");

            migrationBuilder.UpdateData(
                table: "TypeHistonics",
                keyColumn: "TypeHistonicId",
                keyValue: 3,
                column: "Name",
                value: "Для детей");
        }
    }
}
