using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Teatr.Migrations
{
    public partial class ProductionAuthor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProductionAuthor",
                table: "Histonics",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 17, 21, 28, 21, 420, DateTimeKind.Local).AddTicks(9459));

            migrationBuilder.UpdateData(
                table: "Histonics",
                keyColumn: "HistonicId",
                keyValue: 1,
                columns: new[] { "Author", "ProductionAuthor" },
                values: new object[] { "Майкл Фрейн \nкомедія на 2 дії", "Режисер - Олександр Ковшун \nСценографи - Тетяна Савіна,Тамара Лєвшина \nХудожник з костюмів Аліна Горбунова \nТривалість вистави - 2 год. 30 хв. \nПрем’єра - 27 вересня 2019 року" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductionAuthor",
                table: "Histonics");

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
                column: "Author",
                value: "Майкл Фрейн '\n' комедія на 2 дії");
        }
    }
}
