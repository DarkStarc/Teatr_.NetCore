using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Teatr.Migrations
{
    public partial class TypeHistonicAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TypeId",
                table: "Histonics",
                type: "int",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 12, 10, 59, 44, 882, DateTimeKind.Local).AddTicks(4570));

            migrationBuilder.CreateIndex(
                name: "IX_Histonics_TypeId",
                table: "Histonics",
                column: "TypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Histonics_TypeHistonics_TypeId",
                table: "Histonics",
                column: "TypeId",
                principalTable: "TypeHistonics",
                principalColumn: "TypeHistonicId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Histonics_TypeHistonics_TypeId",
                table: "Histonics");

            migrationBuilder.DropIndex(
                name: "IX_Histonics_TypeId",
                table: "Histonics");

            migrationBuilder.DropColumn(
                name: "TypeId",
                table: "Histonics");

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 12, 10, 54, 8, 584, DateTimeKind.Local).AddTicks(291));
        }
    }
}
