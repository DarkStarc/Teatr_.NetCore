using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Teatr.Migrations
{
    public partial class previewAdd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "TimeDuration",
                table: "Histonics",
                type: "datetimeoffset",
                nullable: true,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset");

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 10, 20, 44, 32, 372, DateTimeKind.Local).AddTicks(5753));

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "ImageId", "Path", "Title", "UsedFor" },
                values: new object[] { 5, "Content/Image/zavtra.jpg", "Test", "Histonic" });

            migrationBuilder.InsertData(
                table: "Histonics",
                columns: new[] { "HistonicId", "Description", "Name", "PreviewId", "Roles", "TimeDuration", "UrlToTraller" },
                values: new object[] { 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id odio sed quam ultricies vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra.", "Test", 5, null, null, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Histonics",
                keyColumn: "HistonicId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 5);

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "TimeDuration",
                table: "Histonics",
                type: "datetimeoffset",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)),
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Dates",
                keyColumn: "DateHistonicId",
                keyValue: 1,
                column: "Time",
                value: new DateTime(2021, 3, 10, 13, 13, 12, 945, DateTimeKind.Local).AddTicks(6460));
        }
    }
}
