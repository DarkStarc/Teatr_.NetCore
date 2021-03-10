using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Teatr.Migrations
{
    public partial class preview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsPreview",
                table: "Images");

            migrationBuilder.AddColumn<int>(
                name: "PreviewId",
                table: "Histonics",
                type: "int",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 10, 13, 13, 12, 945, DateTimeKind.Local).AddTicks(6460));

            migrationBuilder.CreateIndex(
                name: "IX_Histonics_PreviewId",
                table: "Histonics",
                column: "PreviewId");

            migrationBuilder.AddForeignKey(
                name: "FK_Histonics_Images_PreviewId",
                table: "Histonics",
                column: "PreviewId",
                principalTable: "Images",
                principalColumn: "ImageId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Histonics_Images_PreviewId",
                table: "Histonics");

            migrationBuilder.DropIndex(
                name: "IX_Histonics_PreviewId",
                table: "Histonics");

            migrationBuilder.DropColumn(
                name: "PreviewId",
                table: "Histonics");

            migrationBuilder.AddColumn<bool>(
                name: "IsPreview",
                table: "Images",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 10, 12, 9, 33, 320, DateTimeKind.Local).AddTicks(8119));

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4,
                column: "IsPreview",
                value: true);
        }
    }
}
