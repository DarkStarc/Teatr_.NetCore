using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Teatr.Migrations
{
    public partial class inital : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Dates",
                columns: table => new
                {
                    DateHistonicId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Time = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dates", x => x.DateHistonicId);
                });

            migrationBuilder.CreateTable(
                name: "Histonics",
                columns: table => new
                {
                    HistonicId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Roles = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UrlToTraller = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeDuration = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Histonics", x => x.HistonicId);
                });

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    ImageId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsedFor = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.ImageId);
                });

            migrationBuilder.CreateTable(
                name: "DateHistonicHistonic",
                columns: table => new
                {
                    DatesDateHistonicId = table.Column<int>(type: "int", nullable: false),
                    HistonicsHistonicId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DateHistonicHistonic", x => new { x.DatesDateHistonicId, x.HistonicsHistonicId });
                    table.ForeignKey(
                        name: "FK_DateHistonicHistonic_Dates_DatesDateHistonicId",
                        column: x => x.DatesDateHistonicId,
                        principalTable: "Dates",
                        principalColumn: "DateHistonicId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DateHistonicHistonic_Histonics_HistonicsHistonicId",
                        column: x => x.HistonicsHistonicId,
                        principalTable: "Histonics",
                        principalColumn: "HistonicId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HistonicImage",
                columns: table => new
                {
                    HistonicsHistonicId = table.Column<int>(type: "int", nullable: false),
                    ImagesImageId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HistonicImage", x => new { x.HistonicsHistonicId, x.ImagesImageId });
                    table.ForeignKey(
                        name: "FK_HistonicImage_Histonics_HistonicsHistonicId",
                        column: x => x.HistonicsHistonicId,
                        principalTable: "Histonics",
                        principalColumn: "HistonicId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HistonicImage_Images_ImagesImageId",
                        column: x => x.ImagesImageId,
                        principalTable: "Images",
                        principalColumn: "ImageId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Dates",
                columns: new[] { "DateHistonicId", "Time" },
                values: new object[] { 1, new DateTime(2021, 3, 1, 23, 3, 59, 538, DateTimeKind.Local).AddTicks(3772) });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "ImageId", "Path", "Title", "UsedFor" },
                values: new object[,]
                {
                    { 1, "Content/Image/1.png", "Test", "Main" },
                    { 2, "Content/Image/2.png", "Test", "Main" },
                    { 3, "Content/Image/3.png", "Test", "Promotion" },
                    { 4, "Content/Image/25.jpg", "Test", "Promotion" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_DateHistonicHistonic_HistonicsHistonicId",
                table: "DateHistonicHistonic",
                column: "HistonicsHistonicId");

            migrationBuilder.CreateIndex(
                name: "IX_HistonicImage_ImagesImageId",
                table: "HistonicImage",
                column: "ImagesImageId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DateHistonicHistonic");

            migrationBuilder.DropTable(
                name: "HistonicImage");

            migrationBuilder.DropTable(
                name: "Dates");

            migrationBuilder.DropTable(
                name: "Histonics");

            migrationBuilder.DropTable(
                name: "Images");
        }
    }
}
