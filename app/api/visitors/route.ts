import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "visitors.json");
const BASE_COUNT = 1420;

function getCount(): number {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(content);
      if (typeof parsed.count === "number" && !isNaN(parsed.count)) {
        return parsed.count;
      }
    }
  } catch (error) {
    console.error("Error reading visitor data:", error);
  }
  return BASE_COUNT;
}

function saveCount(count: number): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(
      DATA_FILE,
      JSON.stringify({ count, updatedAt: new Date().toISOString() }, null, 2)
    );
  } catch (error) {
    console.error("Error writing visitor data:", error);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const increment = searchParams.get("increment") === "true";

  let currentCount = getCount();

  if (increment) {
    currentCount += 1;
    saveCount(currentCount);
  }

  return NextResponse.json({ count: currentCount });
}
